// const path = require('path');
import * as path from 'path';
import { Polly } from '@pollyjs/core';
import { setupPolly } from 'setup-polly-jest';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';

import findBin from '../src/index'
import NotFoundError from '../src/errors/not_found_error'

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

describe('requests', () => {
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, 'recordings')
      }
    },
    recordFailedRequests: true,
    // mode: 'record' // This will re-record all requests
  });
  // console.log(path.resolve(__dirname))
  // console.log(path.resolve(__dirname, 'recordings'))

  it('finds a visa debit bin', async () => {
    const bin = await findBin("45717360");

    expect(bin.scheme).toEqual("visa");
    expect(bin.type).toEqual("debit");
    expect(bin.brand).toEqual("Visa/Dankort");
    expect(bin.prepaid).toEqual(false);

    expect(bin.number.length).toEqual(16);
    expect(bin.number.luhn).toEqual(true);

    expect(bin.country.numeric).toEqual("208");
    expect(bin.country.alpha2).toEqual("DK");
    expect(bin.country.name).toEqual("Denmark");
    expect(bin.country.emoji).toEqual("🇩🇰");
    expect(bin.country.currency).toEqual("DKK");
    expect(bin.country.latitude).toEqual(56);
    expect(bin.country.longitude).toEqual(10);

    expect(bin.bank.name).toEqual("Jyske Bank");
    expect(bin.bank.url).toEqual("www.jyskebank.dk");
    expect(bin.bank.phone).toEqual("+4589893300");
    expect(bin.bank.city).toEqual("Hjørring");
  });

  it('fails when bin is not found', async () => {
    // https://github.com/facebook/jest/issues/1700#issuecomment-386019524
    await expect(findBin("999999")).rejects.toThrowError("Bin 999999 not found");
    await expect(findBin("999999")).rejects.toThrowError(NotFoundError);
  });
});
