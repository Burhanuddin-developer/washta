"use client";
import ActiveConversations from "../components/activeConversations";
import { useSearchParams } from 'next/navigation';

export default function Chat(){
    const searchParams = useSearchParams();
    const requestId = searchParams.get('requestId') || "";
    return(
        <ActiveConversations requestId={requestId} />
    )
}