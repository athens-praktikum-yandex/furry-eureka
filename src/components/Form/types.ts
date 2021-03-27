export type FormLinkProps = {
  value: string,
  to: string,
};

export type OwnProps = {
  title: string,
  submitText: string,
  link?: FormLinkProps,
};
