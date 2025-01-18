import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
