export type AuthModalSchema = {
  isOpen: boolean;
};

export type AuthSchema = {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
};
