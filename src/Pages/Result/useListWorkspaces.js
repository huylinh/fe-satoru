import { useCallback, useMemo, useEffect, useState } from 'react';
// import useQueryString from '../../hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import {getWorkspaces} from "../../Services/searchService.js";
import useQueryString from "../../Hooks/useQueryString.js";


export default function useListWorkspaces() {
    const [totalPage, setTotalPage] = useState(1);

    const defaultQueryString = useMemo(() => {
        return {
            page: 1,
            limit: 5,
        };
    }, []);


    const { queryString, setQueryString } = useQueryString();

    const { page, limit } = queryString;

    const parseData = useCallback((data) => {
        const workspaces = data?.data.map((item) => {
            return {
                id:item.id,
                name: item.name,
                price: item.price,
                opening_hour: item.opening_hour,
                closing_hour: item.closing_hour,
                rating:item.average_rating ,
                rating_count:item.reviews_count,
                status:item.status,
                address:item.address,
                image:item.workspace_images[0].image_url,
            };
        });
        const pagination = {
            page: data?.meta.current_page,
            totalPage: data?.meta.last_page,
            limit: data?.meta.per_page,
            total:data?.meta.total,
        };
        return { pagination, workspaces };
    }, []);

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['workspaces', queryString],
        queryFn: () => getWorkspaces(queryString),
        staleTime: 20 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!page && !!limit,
    });

    console.log(data?.workspaces)

    const handlePageChange = useCallback(
        (e, value) => {
            setQueryString({ ...queryString, page: value });
            window.scrollTo(0, 0);
        },
        [queryString, setQueryString],
    );

    useEffect(() => {
        if (data?.pagination?.totalPage !== undefined) {
            setTotalPage(data.pagination.totalPage);
        }
    }, [data?.pagination?.totalPage]);

    useEffect(() => {
        if (!page || !limit) {
            setQueryString(defaultQueryString);
        }
    }, [defaultQueryString, limit, page, queryString, setQueryString]);

    return {
        listWorkspaces: data?.workspaces,
        pagination: data?.pagination,
        isSuccess,
        isLoading,
        page:data?.pagination.page,
        total:data?.pagination.total,
        limit,
        totalPage: data?.pagination.totalPage,
        handlePageChange,
        queryString, setQueryString
    };
}
