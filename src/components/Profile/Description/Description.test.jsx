import React from 'react';
import {create} from 'react-test-renderer';
import Description from "./Description";

describe("Descrition component", () => {
    test("status from props should be in the state", () => {
        const component = create(
            <Description
                status={'it-kamasutra'}
                profile={
                    {
                        fullName: 'it',
                        contacts: [],

                    }
                }
            />
        );
        const instance = component.root;
        expect(instance.props.status).toBe('it-kamasutra');
    });
    test("after creation <span> should be displayed", () => {
        const component = create(
            <Description
                status={'it-kamasutra'}
                profile={
                    {
                        fullName: 'it',
                        contacts: [],

                    }
                }
            />
        );
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span !== undefined).toBe(true);
    });
    test("after creation <span> should contain correct status", () => {
        const component = create(
            <Description
                status={'it-kamasutra'}
                profile={
                    {
                        fullName: 'it',
                        contacts: [],

                    }
                }
            />
        );
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe('it-kamasutra');
    });
    test("shoudn't find input", () => {
        const component = create(
            <Description
                status={'it-kamasutra'}
                profile={
                    {
                        fullName: 'it',
                        contacts: [],

                    }
                }
            />
        );
        const instance = component.root;

        expect(()=>{
            const input = instance.findByType("input");
        }).toThrow();
    });
    test("input should be displayed in edit mode", () => {
        const component = create(
            <Description
                editMode={true}
                status={'it-kamasutra'}
                profile={
                    {
                        fullName: 'it',
                        contacts: [],

                    }
                }
            />
        );
        const instance = component.root;

        const input = instance.findByType("input");

        expect(input.props.value).toBe('it-kamasutra');
    });
});