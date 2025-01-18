import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
