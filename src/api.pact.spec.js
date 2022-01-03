import { Pact } from '@pact-foundation/pact';
import GetBackend from './api/GetBackend';
import { eachLike, like, regex } from '@pact-foundation/pact/src/dsl/matchers';
import PostBackend from './api/PostBackend';




const PORT = 5000;
const URL = 'http://localhost';


const mockProvider = new Pact({
    consumer: 'todo-consumer',
    provider: process.env.PACT_PROVIDER ? process.env.PACT_PROVIDER : 'todo-provider', port: PORT,
});

describe('API Pact test', () => {
    beforeAll(() => mockProvider.setup());
    afterEach(() => mockProvider.verify());
    afterAll(() => mockProvider.finalize());


    describe('When a request to list all todos is made', () => {
        test('should return all todos', async () => {

            const expectedPrduct = {
                message: "Success",
                todolist: [
                    {
                        todo: "dummy to do",
                        _id: "61d18b57303533a3db43d7ef"
                    },
                    ]
            }
            const expected =
            {
                todo: "dummy to do",
                _id: "61d18b57303533a3db43d7ef"
            }


            await mockProvider.addInteraction({
                state: "todo's exist",
                uponReceiving: "a request to get all todo",
                withRequest: {
                    method: 'GET',
                    path: '/alltodo',
                },

                willRespondWith: {
                    status: 200,
                    body: like(
                        {
                            message: "Success",
                            todolist: eachLike(expected)
                        }
                    ),

                }
            })


            const response = await GetBackend(URL, PORT)
            console.log(response)

            expect(response).toStrictEqual(expectedPrduct.todolist)

        })

  

    })
    describe('When a request to add todo', () => {
        test('should return success', async () => {
            const newTodo = {
                todo: "adding dummy todo"
            }


            await mockProvider.addInteraction({
                state: "todo's created",
                uponReceiving: "a request to add todo",
                withRequest: {
                    method: 'POST',
                    path: '/newtodo',
                    body: newTodo,
                    headers: {
                        'Content-Type': regex({ generate: 'application/json; charset=utf-8', matcher: 'application/json;?.*' }),
                    },


                },

                willRespondWith: {
                    status: 201,
                    body: like(
                        {
                            message: "New ToDo Added to Databese",
                            todo: "adding dummy todo"

                        }
                    ),

                }
            })

            const response = await PostBackend(URL, PORT, newTodo)



            expect(response.data.todo).toStrictEqual(newTodo.todo)
        })

    })
})