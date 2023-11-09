import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function push(...args) {
  navigationRef.current?.dispatch(CommonActions.push(...args));
}

export function pop() {
  navigationRef.current?.dispatch(CommonActions.pop());
}

export function replace(name, params) {
  navigationRef.current?.dispatch(CommonActions.replace(name, params));
}
