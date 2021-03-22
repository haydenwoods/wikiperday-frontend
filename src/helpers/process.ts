import { ProcessModule } from "@/store/modules/process";

import { Status } from "@/types/process";

export const getProcess = ({ name }: { name?: string }) => {
  if (!name) return null;
  const process = ProcessModule.getProcesses?.[name];
  return process;
};

export const getProcessStatus = ({ name }: { name?: string }) => {
  const process = getProcess({ name });
  const status = process?.status;
  return status;
};

export const getProcessError = ({ name }: { name?: string }) => {
  const process = getProcess({ name });
  const error = process?.error;
  return error;
};

export const getIsStatus = ({
  name,
  status,
}: {
  name: string;
  status: Status;
}): boolean => {
  const isStatus = getProcessStatus({ name }) === status;
  return isStatus;
};

export const getAllIsStatus = ({
  names,
  status,
}: {
  names: string[];
  status: Status;
}) => {
  const allIsStatus = names.reduce((allIsStatus, name): boolean => {
    if (allIsStatus && getIsStatus({ name, status })) {
      return true;
    }
    return false;
  }, true);

  return allIsStatus;
};

export const getAnyIsStatus = ({
  names,
  status,
}: {
  names: string[];
  status: Status;
}) => {
  const anyIsStatus = names
    .map((name) => getProcessStatus({ name }))
    .includes(status);
  return anyIsStatus;
};

export const getAllErrors = ({ names }: { names: string[] }) => {
  const errors = names.map((name) => getProcessError({ name }));
  return errors;
};
