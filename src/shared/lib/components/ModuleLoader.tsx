import { FC, ReactNode, useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import {
  StateSchema,
  StateSchemaKeys,
  StoreWithManager,
} from "@/app/providers/rtk-provider";

export type ReducersList = { [K in keyof StateSchema]?: Reducer };

type ReducerEntry = [StateSchemaKeys, Reducer];

type ModuleLoaderProps = {
  children: ReactNode;
  reducers: ReducersList;
  isRemoveAfterUnmount?: boolean;
};

export const ModuleLoader: FC<ModuleLoaderProps> = ({
  children,
  reducers,
  isRemoveAfterUnmount = true,
}) => {
  const store = useStore() as StoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach((item) => {
      const [name, reducer] = item as ReducerEntry;
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach((item) => {
          const [name] = item as ReducerEntry;
          store.reducerManager.remove(name);
        });
      }
    };
  }, [store.reducerManager, reducers, isRemoveAfterUnmount]);

  return <>{children}</>;
};
