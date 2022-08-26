import { storeFastPathData, executeFastPathData, executeSlowPathData, storeSlowPathData } from "./execute";
import { sendExecuteFastToRelayer, sendExecuteSlowToRelayer } from "./relayer";
import { updateTask, getTaskStatus } from "./tasks";

export const getOperations = () => {
  return {
    execute: {
      storeFastPathData,
      executeFastPathData,
      storeSlowPathData,
      executeSlowPathData,
    },
    relayer: {
      sendExecuteFastToRelayer,
      sendExecuteSlowToRelayer,
    },
    tasks: {
      updateTask,
      getTaskStatus,
    },
  };
};
