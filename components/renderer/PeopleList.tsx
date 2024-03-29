import LinkWrapper from '@components/LinkWrapper';
import { TypeBlockPeopleListFields, TypePage, TypePagePerson } from '@types';
import { fetcher } from 'api/fetcher';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';

const ListItemPerson = ({ personPage, page }: { personPage: TypePagePerson; page: TypePage }) => {
    const { firstName, lastName, jobTitle, profileImage } = personPage.fields.person.fields;

    return (
        <LinkWrapper page={page}>
            <a>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative rounded-full" style={{ height: 200, width: 200 }}>
                        <Image
                            height={200}
                            width={200}
                            className="w-full rounded-full"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            src={`https:${profileImage.fields.media.fields.file.url}`}
                            alt={profileImage.fields.altText}
                            sizes="200"
                        />
                    </div>
                    <h5 className="mt-4 h4">
                        {firstName} {lastName}
                    </h5>
                    <div className="overline h5">{jobTitle}</div>
                </div>
            </a>
        </LinkWrapper>
    );
};

type PeopleListProps = {
    fields: TypeBlockPeopleListFields;
};

const PeopleList = (props: PeopleListProps) => {
    const { fields } = props;
    const { data, error } = useSWR<TypePage[], Error>('/api/people', fetcher);
    const { people, peoplePages, peoplePagesCompose } = fields;

    // TODO: add loader
    if (!data || !peoplePages) return null;

    return (
        <div className="container mb-20">
            <div className="grid grid-cols-14">
                <div className="col-span-12 col-start-2">
                    <div className="block md:grid-cols-12 md:gap-6 md:grid">
                        {peoplePages.map((personPage: TypePagePerson) => {
                            const page = data.find((p) => p.fields.content.sys.id === personPage.sys.id);

                            if (!page) return null;
                            return (
                                <div className="mb-8 md:mb-0 md:col-span-6 lg:col-span-4" key={personPage.sys.id}>
                                    <ListItemPerson personPage={personPage} page={page} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleList;
