import { event as evt } from "sst/event";
import { ZodValidator } from "sst/event/validator";

export const event = evt.builder({
  validator: ZodValidator,
  metadata: () => ({
    // actor: useActor(),
  }),
});
