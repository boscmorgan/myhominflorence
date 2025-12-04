#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
