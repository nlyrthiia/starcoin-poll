// @ts-ignore
import client from '@/utils/client';
import { getNetwork } from '@/utils/helper';
import { getPollAccountVotes } from '@/utils/sdk';

const network = getNetwork();

export const getPoll = (params: any) => client.get(`block/${network}/hash/${params.hash}`);
export const getPollByHeight = (params: any) => client.get(`block/${network}/height/${params.height}`);
export const getPollList = (params: any) => client.get(`block/${params.network ? params.network : network}/page/${params.page}${params.total ? `?total=${params.total}` : ''}`);
export const getPollVotes = async (params: any) => {
    const result: any = await getPollAccountVotes(params.selectedAccount);
    let votes: Record<string, any> = {
        selectedAccount: params.selectedAccount,
        agree: undefined,
        value: undefined,
    };
    if (result) {
        votes.agree = result.agree;
        votes.value = result.stake.value;
    }
    return votes;
}