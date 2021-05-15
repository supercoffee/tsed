import {InjectorService} from "@tsed/di";
import {HandlerType, PlatformRouteWithoutHandlers} from "../../mvc/interfaces";
import {EndpointMetadata} from "../../mvc/models/EndpointMetadata";
import {HandlerMetadata, HandlerMetadataOptions} from "../../mvc/models/HandlerMetadata";

function isMetadata(input: any) {
  return input instanceof HandlerMetadata;
}

/**
 * @ignore
 */
export function createHandlerMetadata(
  injector: InjectorService,
  obj: any | EndpointMetadata,
  routeOptions: PlatformRouteWithoutHandlers = {}
): HandlerMetadata {
  if (isMetadata(obj)) {
    return obj as HandlerMetadata;
  }

  let options: HandlerMetadataOptions;

  if (obj instanceof EndpointMetadata) {
    const provider = injector.getProvider(obj.token)!;

    options = {
      injector,
      token: provider.token,
      target: provider.useClass,
      type: HandlerType.ENDPOINT,
      propertyKey: obj.propertyKey
    };
  } else {
    const provider = injector.getProvider(obj);

    if (provider) {
      options = {
        injector,
        token: provider.token,
        target: provider.useClass,
        type: HandlerType.MIDDLEWARE,
        propertyKey: "use"
      };
    } else {
      options = {
        injector,
        target: obj
      };
    }
  }

  options.routeOptions = routeOptions;

  return new HandlerMetadata(options);
}
