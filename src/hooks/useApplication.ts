import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import {
  createApplication as createApplicationApi,
  getApplications,
} from "../services/serviceApi";
export function useCreateApplication() {
  const queryClient = useQueryClient();
  const { mutate: createApplication, isPending } = useMutation({
    mutationFn: createApplicationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  return { createApplication, isPending };
}

export function useApplications() {
  const { data: applications, isPending } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

  return { applications, isPending };
}
