import { ComponentPropsWithoutRef, ElementType } from "react";

export type WithStandardProps<U extends ElementType, T> = T & Omit<ComponentPropsWithoutRef<U>, keyof T>;

export type MutuallyExclusiveProps<T, U> =
  | ({ [P in Exclude<keyof T, keyof U>]: T[P] } & { [P in Exclude<keyof U, keyof T>]?: never })
  | ({ [P in Exclude<keyof U, keyof T>]: U[P] } & { [P in Exclude<keyof T, keyof U>]?: never });
