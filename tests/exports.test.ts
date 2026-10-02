import * as Actions from '../Actions';
import * as PlayerActions from '../PlayerActions';
import * as Types from '../Types';
import * as UnitImprovements from '../UnitImprovements';
import * as Units from '../Units';
import { expect } from 'chai';
import { JoinCity } from '@civ-clone/base-unit-action-join-city/JoinCity';

describe('library-unit', (): void => {
  (
    [
      ['Actions', Actions],
      ['PlayerActions', PlayerActions],
      ['Types', Types],
      ['UnitImprovements', UnitImprovements],
      ['Units', Units],
    ] as [string, { [key: string]: unknown }][]
  ).forEach(([moduleName, exports]): void =>
    it(`should export a class under its own name from \`${moduleName}\``, (): void => {
      expect(Object.keys(exports)).not.empty;

      Object.entries(exports).forEach(([name, value]): void => {
        expect(value, name).to.be.a('function');
        expect((value as Function).name, name).to.equal(name);
      });
    })
  );

  it('should re-export `JoinCity` from base-unit-action-join-city', (): void => {
    expect(Actions.JoinCity).to.equal(JoinCity);
  });
});
