import type { UserConfig } from '@commitlint/types';
import type { MDXComponents } from 'mdx/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
  },
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}

export default Configuration;
