// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name arrayUnzip
 * @description Splits a single [K, V][] into [K[], V[]]
 */
export function arrayUnzip <K, V> (entries: readonly [K, V][]): [K[], V[]] {
  const keys = new Array<K>(entries.length);
  const values = new Array<V>(entries.length);

  for (let i = 0; i < entries.length; i++) {
    [keys[i], values[i]] = entries[i];
  }

  return [keys, values];
}
