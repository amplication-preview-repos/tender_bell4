import { Agent } from "../agent/Agent";
import { Property } from "../property/Property";

export type AgentAssignment = {
  agent?: Agent | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
