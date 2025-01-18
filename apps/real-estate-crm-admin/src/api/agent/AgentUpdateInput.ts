import { AgentAssignmentUpdateManyWithoutAgentsInput } from "./AgentAssignmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  agentAssignments?: AgentAssignmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: number | null;
};
