// import { UserStore } from './UserStore';
// import { reaction } from 'mobx';
// import { UserProvider } from '../providers/UserProvider';
//
// class MockedUserProvider extends UserProvider {
//   public login(): Promise<any> {
//     console.log('HEllo world');
//     return Promise.resolve({
//       token: 'TESTTOKEN',
//     });
//   }
// }


describe('User store', () => {
  // const token = 'TESTTOKEN';
  // let isTokenChanged = false;
  // let store: UserStore;
  // // let unsubsscribeFn;
  //
  // beforeAll(() => {
  //   // jest.mock('UserProvider', () => MockedUserProvider)
  // });
  //
  // beforeEach(() => {
  //   store = new UserStore(new MockedUserProvider());
  //   // unsubsscribeFn = reaction(() => store.token, () => {
  //   //   isTokenChanged = true;
  //   // });
  // });
  //
  // test('It should set token and react on change', () => {
  //   return store.login({}).then(() => {
  //     expect(store.token).toEqual(token);
  //     expect(isTokenChanged).toEqual(true);
  //   });
  // });
});