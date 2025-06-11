import config from "@/payload.config";
import { getPayload } from "payload";

const testCMS = async () => {
  try {
    const payload = await getPayload({ config });

    console.log("Testing CMS connection...");

    // Try to fetch existing blog posts
    const blogs = await payload.find({
      collection: "blog",
      limit: 5,
    });

    console.log(`Found ${blogs.docs.length} blog posts`);

    // Try to fetch existing projects
    const projects = await payload.find({
      collection: "projects",
      limit: 5,
    });

    console.log(`Found ${projects.docs.length} projects`);

    // Try to fetch media
    const media = await payload.find({
      collection: "media",
      limit: 5,
    });

    console.log(`Found ${media.docs.length} media files`);
  } catch (error) {
    console.error("CMS connection error:", error);
  }
};

testCMS();
