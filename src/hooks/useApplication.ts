import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createApplication as createApplicationApi } from "../services/serviceApi";
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
