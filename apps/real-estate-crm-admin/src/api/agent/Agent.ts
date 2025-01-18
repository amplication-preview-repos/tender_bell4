import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Agent = {
  agentAssignments?: Array<AgentAssignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: number | null;
  updatedAt: Date;
};
