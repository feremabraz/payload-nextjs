import { projects } from "@lib/project-data";
import { SectionContainer } from "@shared-components/section-container";

interface ProjectStandaloneProps {
  id: number;
}

interface ProjectFieldProps {
  label: string;
  value: string;
  isTitle?: boolean;
}

function ProjectField({ label, value, isTitle = false }: ProjectFieldProps) {
  return (
    <div className="flex flex-col items-start gap-2 flex-1">
      <span className="text-sm font-medium text-muted">{label}</span>
      {isTitle ? (
        <h1 className="text-4xl font-semibold w-[300px] text-foreground">{value}</h1>
      ) : (
        <p className="text-4xl font-semibold w-[300px] text-foreground">{value}</p>
      )}
    </div>
  );
}

export default function ProjectStandalone({ id }: ProjectStandaloneProps) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return null;
  }

  const firstRowFields = [
    { label: "Project Title", value: project.title, isTitle: true },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];

  const secondRowFields = [
    { label: "Project Type", value: project.projectType },
    { label: "Client", value: project.client },
    { label: "Project Size", value: project.projectSize },
  ];

  return (
    <SectionContainer maxWidth="container" paddingY="lg">
      <div className="flex flex-col gap-16">
        <div className="flex items-start gap-16">
          {firstRowFields.map((field) => (
            <ProjectField
              key={field.label}
              label={field.label}
              value={field.value}
              isTitle={field.isTitle}
            />
          ))}
        </div>
        <div className="flex items-start gap-16">
          {secondRowFields.map((field) => (
            <ProjectField key={field.label} label={field.label} value={field.value} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
