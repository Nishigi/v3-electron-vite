import { defineStore } from 'pinia';
import { Names } from './store-name';
export const useTestStroe = defineStore(Names.TEST, {
    state: () => {
        return {
            age: 18,
            name: 'yjj',
        };
    },
    getters: {},
    actions: {},
});
