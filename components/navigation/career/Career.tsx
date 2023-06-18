'use client';

import { FaReact } from 'react-icons/fa';
import { Menu } from '../NavMenu';
import Content from './Content';
import ListItem from './ListItem';
import Pointer from './Pointer';
import { useEffect, useRef, useState } from 'react';
import ProjectListItem from './ProjectListItem';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { careerItems } from '../content';
import { ArrayType } from '@/lib/typeUtils';
import { TLanguageItem, languages } from '../menu-content/Languages';
import LanguageItem from '../menu-content/LanguageItem';

export type Identifier = "frits" | "biller" | "vonwood" | "next"
export type AnimationDirection = "up" | "down"
export interface TListItem {
    order: number,
    careerItemRect?: DOMRect,
}
export type Props = {
    menu: Menu
    navOrder: number
}

type CareerContentProps = React.ComponentProps<"div"> & {
    item: ArrayType<typeof careerItems>
}

export const CareerContent: React.FC<CareerContentProps> = ({ item, ...props }) => {
    const router = useRouter();

    const careerLanguages = languages.filter(({ language }) => item.languages?.includes(language as unknown as TLanguageItem))

    return (
        <div {...props}>
            <div className='uppercase'>projects</div>

            <ul>
                {item.projects.map((project, key) => <ProjectListItem key={key}>{project}</ProjectListItem>)}
            </ul>

            {!!item.withContactButton && (
                <div className='mt-6'>
                    <Button onClick={() => router.push('contact')}>
                        contact
                    </Button>
                </div>
            )}

            {!!careerLanguages && (
                <div className="pt-6">
                    <div className='uppercase mt-6'>languages</div>
                    <ul className='flex flex-wrap gap-4 mt-3'>
                        {careerLanguages.map((lang, key) => <LanguageItem key={lang.language} {...lang} />)}
                    </ul>
                </div>
            )}
        </div>
    )
}


const Career: React.FC<Props> = ({ navOrder, menu }) => {
    const ref = useRef<HTMLDivElement>(null);
    const firstItemRef = useRef<HTMLLIElement>(null);
    const resetListItemTimeoutRef = useRef<NodeJS.Timeout>()
    const [animationDirection, setAnimationDirection] = useState<AnimationDirection>("down")
    const [listItem, setListItem] = useState<TListItem>({ careerItemRect: undefined, order: 1 })

    const resetMenu = () => {
        resetListItemTimeoutRef.current = setTimeout(() => {
            setAnimationDirection("down")
            setListItem({ careerItemRect: firstItemRef.current?.getBoundingClientRect(), order: 1 })
        }, 100)
    }

    const cancelResetMenu = () => {
        clearTimeout(resetListItemTimeoutRef.current)
    }

    const onListItemEnter = (careerItemRect: DOMRect | undefined, order: number) => {
        cancelResetMenu()
        if (order > listItem.order)
            setAnimationDirection("down")
        else
            setAnimationDirection("up")

        setListItem({ careerItemRect, order })
    }

    useEffect(() => { menu.order !== navOrder && resetMenu() }, [menu])

    return (
        <div ref={ref} className='flex min-h-[500px]'>
            <ul className="list-reset cursor-default">
                {careerItems.map((item, key) => (
                    <ListItem
                        key={key}
                        order={item.order}
                        listItem={listItem}
                        onMouseEnter={onListItemEnter}
                        refCustom={item.order === 1 ? firstItemRef : undefined}
                    >
                        <div className='font-medium'>{item.title}</div>
                        <div>{item.subTitle}</div>
                    </ListItem>
                ))}
            </ul>

            <div className='pl-2 pr-6'>
                <Pointer
                    item={listItem}
                    containerTop={ref.current?.getBoundingClientRect().top}
                />
            </div>

            <div className='flex-1 relative bg-primary dark:bg-gray-100 dark:bg-opacity-25 rounded overflow-hidden'>
                {careerItems.map((item, key) => (
                    <Content
                        key={key}
                        order={item.order}
                        listItem={listItem}
                        animationDirection={animationDirection}
                    >
                        <CareerContent item={item} />
                    </Content>

                ))}
            </div>
        </div>
    )
}

export default Career