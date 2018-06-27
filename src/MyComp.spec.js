import { mount } from '@vue/test-utils';
import MyComp from '../src/MyComp';

describe('MyComp', () => {

    let exampleDatas = [
        {
            "label": "Elem 0",
            "id": 4
        },
        {
            "label": "Elem 1",
            "id": 6,
        },
        {
            "label": "Elem 2",
            "id": 10,
        }
    ];

    test('slot is working when set', () => {
        const wrapper = mount(MyComp, {
            propsData: {
                myArray: exampleDatas
            },
            scopedSlots: {
                foo: '<p slot-scope="f">{{ f.myData.id }} - {{ f.myData.label }}</p>'
            }
        });

        expect(wrapper.html()).toContain(`4 - Elem 0`);
    });

});