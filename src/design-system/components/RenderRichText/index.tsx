import { RenderRichTextProps } from "./types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function RenderRichText(params: RenderRichTextProps) {
  return <>{documentToReactComponents(params.richText)}</>;
}
