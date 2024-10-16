import { IMessages, ITopicsItem } from '@/modules/Suppport/types';

export const isITopicItem = (
    obj: ITopicsItem | IMessages,
): obj is ITopicsItem => {
    return (obj as ITopicsItem)?.client !== undefined;
};
