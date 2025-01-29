import { zodToVertexSchema } from "@techery/zod-to-vertex-schema";
import { z } from "zod";

const TestSchema = z.object({
  foo: z.number().nullable(),
});

zodToVertexSchema(TestSchema);
