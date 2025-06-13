import type { Media } from "@/payload-types";
import Image from "next/image";
import type React from "react";

interface RichTextNode {
  type: string;
  children?: RichTextNode[];
  text?: string;
  format?: number;
  mode?: string;
  style?: string;
  detail?: number;
  version?: number;
  direction?: string;
  indent?: number;
  tag?: string;
  listType?: string;
  url?: string;
  newTab?: boolean;
  value?:
    | {
        id: number | string;
      }
    | Media;
  relationTo?: string;
}

interface RichTextRoot {
  root: RichTextNode;
}

interface RichTextRendererProps {
  content: unknown;
  className?: string;
}

// Helper function to transform media URL
function getMediaUrl(media: Media): string {
  return media.url || "/placeholder-image.jpg";
}

function renderNode(node: RichTextNode, key: string | number): React.ReactNode {
  if (!node) return null;

  // Handle upload/media nodes inline
  if (node.type === "upload" && node.relationTo === "media" && node.value) {
    if (typeof node.value === "object" && "url" in node.value) {
      const media = node.value as Media;
      return (
        <div key={key} className="my-6">
          <div className="relative w-full h-[60vh]">
            <Image
              src={getMediaUrl(media)}
              alt={media.alt || "Blog image"}
              fill
              className="object-cover rounded-lg"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      );
    }
    return null;
  }

  // Text node
  if (node.type === "text" && node.text) {
    let textElement: React.ReactNode = node.text;

    // Apply formatting based on format flags
    if (node.format && node.format > 0) {
      // Format is a bitfield: 1=bold, 2=italic, 4=strikethrough, 8=underline
      if (node.format & 1) textElement = <strong key={key}>{textElement}</strong>;
      if (node.format & 2) textElement = <em key={key}>{textElement}</em>;
      if (node.format & 4) textElement = <s key={key}>{textElement}</s>;
      if (node.format & 8) textElement = <u key={key}>{textElement}</u>;
    }

    return textElement;
  }

  // Paragraph node
  if (node.type === "paragraph") {
    return (
      <p key={key} className="mb-4 text-base leading-relaxed">
        {node.children?.map((child, index) => renderNode(child, `${key}-${index}`))}
      </p>
    );
  }

  // Heading nodes
  if (node.type === "heading") {
    const level = node.tag || "h2";

    const headingClasses: Record<string, string> = {
      h1: "text-3xl font-bold mb-6",
      h2: "text-2xl font-semibold mb-4",
      h3: "text-xl font-semibold mb-3",
      h4: "text-lg font-semibold mb-2",
      h5: "text-base font-semibold mb-2",
      h6: "text-sm font-semibold mb-2",
    };

    const className = headingClasses[level] || headingClasses.h2;
    const children = node.children?.map((child, index) => renderNode(child, `${key}-${index}`));

    switch (level) {
      case "h1":
        return (
          <h1 key={key} className={className}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 key={key} className={className}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 key={key} className={className}>
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 key={key} className={className}>
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5 key={key} className={className}>
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6 key={key} className={className}>
            {children}
          </h6>
        );
      default:
        return (
          <h2 key={key} className={className}>
            {children}
          </h2>
        );
    }
  }

  // List nodes
  if (node.type === "list") {
    const ListTag = node.listType === "number" ? "ol" : "ul";
    const listClasses =
      ListTag === "ol" ? "list-decimal list-inside mb-4 pl-4" : "list-disc list-inside mb-4 pl-4";

    return (
      <ListTag key={key} className={listClasses}>
        {node.children?.map((child, index) => renderNode(child, `${key}-${index}`))}
      </ListTag>
    );
  }

  // List item nodes
  if (node.type === "listitem") {
    return (
      <li key={key} className="mb-1">
        {node.children?.map((child, index) => renderNode(child, `${key}-${index}`))}
      </li>
    );
  }

  // Quote/blockquote nodes
  if (node.type === "quote") {
    return (
      <blockquote key={key} className="border-l-4 border-gray-300 pl-4 italic mb-4">
        {node.children?.map((child, index) => renderNode(child, `${key}-${index}`))}
      </blockquote>
    );
  }

  // Link nodes
  if (node.type === "link") {
    const url = node.url || "#";
    return (
      <a
        key={key}
        href={url}
        className="text-blue-600 hover:text-blue-800 underline"
        target={node.newTab ? "_blank" : "_self"}
        rel={node.newTab ? "noopener noreferrer" : undefined}
      >
        {node.children?.map((child, index) => renderNode(child, `${key}-${index}`))}
      </a>
    );
  }

  // Fallback for unknown node types - render children if they exist
  if (node.children) {
    return (
      <div key={key}>
        {node.children.map((child, index) => renderNode(child, `${key}-${index}`))}
      </div>
    );
  }

  return null;
}

export function RichTextRenderer({ content, className = "" }: RichTextRendererProps) {
  if (!content) {
    return null;
  }

  // Handle different content structures
  let richTextContent: RichTextRoot | null = null;

  if (typeof content === "string") {
    // If content is a string, wrap it in a basic paragraph structure
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <p className="text-base leading-relaxed">{content}</p>
      </div>
    );
  }

  if (typeof content === "object" && content !== null) {
    // Check if it's already in the expected format
    if ("root" in content) {
      richTextContent = content as RichTextRoot;
    } else {
      // Try to extract root from content
      richTextContent = content as RichTextRoot;
    }
  }

  if (!richTextContent?.root) {
    // Fallback: render as JSON string for debugging
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <p className="text-sm text-gray-500">
          Rich text content format not recognized. Raw content:
        </p>
        <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
          {JSON.stringify(content, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {richTextContent.root.children?.map((child, index) => renderNode(child, `root-${index}`))}
    </div>
  );
}
