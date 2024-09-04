import { ITopicsItem } from '@/modules/Suppport/types';
import { PROFILE } from '@/shared/constants';

export const itemChatMock: ITopicsItem[] = [
    {
        id: '1',
        client: {
            name: 'Имя',
            surname: 'Фамилия',
        },
        messages: [
            {
                id: '1',
                sender: PROFILE.CLIENT,
                text: 'Привет!',
            },
            {
                id: '2',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
            {
                id: '3',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
            {
                id: '4',
                sender: PROFILE.CLIENT,
                text: 'Сообщение и что с ним происходит, если оно не влезло',
            },
        ],
    },
    {
        id: '2',
        client: {
            name: 'Имя',
            surname: 'Фамилия',
        },
        messages: [
            {
                id: '1',
                sender: PROFILE.CLIENT,
                text: 'Привет!',
            },
            {
                id: '2',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
            {
                id: '3',
                sender: PROFILE.MANAGER,
                text: 'Сообщение и что с ним происходит, если оно не влезло',
            },
            {
                id: '4',
                sender: PROFILE.CLIENT,
                text: 'Привет!',
            },
            {
                id: '5',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
            {
                id: '6',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
            {
                id: '7',
                sender: PROFILE.CLIENT,
                text: 'Информативное сообщение с просьбой, в две строки',
            },
            {
                id: '8',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
            {
                id: '9',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
            {
                id: '10',
                sender: PROFILE.MANAGER,
                text: 'Привет!',
            },
            {
                id: '11',
                sender: PROFILE.MANAGER,
                text: 'Как дела?',
            },
            {
                id: '12',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
            {
                id: '13',
                sender: PROFILE.MANAGER,
                text: 'Информативное сообщение с просьбой, в две строки',
            },
            {
                id: '14',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
            {
                id: '15',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
            {
                id: '16',
                sender: PROFILE.CLIENT,
                text: 'Привет!',
            },
            {
                id: '17',
                sender: PROFILE.CLIENT,
                text: 'Информативное сообщение с просьбой, в две строки',
            },
            {
                id: '18',
                sender: PROFILE.MANAGER,
                text: 'Все хорошо.',
            },
        ],
    },
    {
        id: '3',
        client: {
            name: 'Имя',
            surname: 'Фамилия',
        },
        messages: [
            {
                id: '1',
                sender: PROFILE.CLIENT,
                text: 'Привет!',
            },
            {
                id: '2',
                sender: PROFILE.CLIENT,
                text: 'Как дела?',
            },
        ],
    },
    {
        id: '4',
        client: {
            name: 'Имя',
            surname: 'Фамилия',
        },
        messages: [
            {
                id: '1',
                sender: PROFILE.CLIENT,
                text: 'Сообщение и что с ним происходит, если оно не влезло',
            },
        ],
    },
];
