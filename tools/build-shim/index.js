#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const userAgent = process.env.npm_config_user_agent || '';

const runner = (() => {
  if (userAgent.includes('pnpm')) return 'pnpm';
  if (userAgent.includes('yarn')) return 'yarn';
  if (userAgent.includes('bun')) return 'bun';
  return 'npm';
})();

const command = (() => {
  if (runner === 'yarn') return ['build'];
  return ['run', 'build'];
})();

const result = spawnSync(runner, command, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
