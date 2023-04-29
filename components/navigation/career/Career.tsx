'use client';

import { FaReact } from 'react-icons/fa';
import { Menu } from '../NavMenu';
import Content from './Content';
import ListItem from './ListItem';
import Pointer from './Pointer';
import { useEffect, useRef, useState } from 'react';
import ProjectListItem from './ProjectListItem';

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


const Career: React.FC<Props> = ({ navOrder, menu }) => {
    const ref = useRef<HTMLDivElement>(null);
    const firstItemRef = useRef<HTMLLIElement>(null);
    const resetListItemTimeoutRef = useRef<NodeJS.Timeout>()
    const [prevOrder, setPrevOrder] = useState(1);
    const [animationDirection, setAnimationDirection] = useState<AnimationDirection>("down")
    const [listItem, setListItem] = useState<TListItem>({ careerItemRect: undefined, order: 1 })

    const resetMenu = () => {
        resetListItemTimeoutRef.current = setTimeout(() => {
            setAnimationDirection("down")
            setListItem({ careerItemRect: firstItemRef.current?.getBoundingClientRect(), order: 1 })
            setPrevOrder(1);
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

        setPrevOrder(listItem.order);
        setListItem({ careerItemRect, order })
    }

    useEffect(() => { menu.order !== navOrder && resetMenu() }, [menu])

    return (
        <div ref={ref} className='flex min-h-[500px]'>
            <ul className="list-reset cursor-default">
                <ListItem
                    order={1}
                    listItem={listItem}
                    onMouseEnter={onListItemEnter}
                    refCustom={firstItemRef}
                >
                    <div className='font-medium'>
                        Frits
                    </div>
                    <div>
                        2017-2021
                    </div>
                </ListItem>

                <ListItem order={2} listItem={listItem} onMouseEnter={onListItemEnter}>
                    <div className='font-medium'>
                        Biller
                    </div>
                    <div>
                        2021-now
                    </div>
                </ListItem>

                <ListItem order={3} listItem={listItem} onMouseEnter={onListItemEnter}>
                    <div className='font-medium'>
                        VonWood
                    </div>
                    <div>
                        2023-now
                    </div>
                </ListItem>

                <ListItem order={4} listItem={listItem} onMouseEnter={onListItemEnter}>
                    <div className='font-medium'>
                        Next?
                    </div>
                </ListItem>
            </ul>

            <div className='pl-2 pr-6'>
                <Pointer
                    item={listItem}
                    show={navOrder === menu?.order}
                    containerTop={ref.current?.getBoundingClientRect().top}
                    prevOrder={prevOrder}
                />
            </div>

            <div className='flex-1 relative bg-white dark:bg-gray-100 dark:bg-opacity-25 rounded overflow-hidden'>
                <Content
                    order={1}
                    listItem={listItem}
                    animationDirection={animationDirection}
                >
                    <div>
                        <div className='uppercase'>
                            projects
                        </div>

                        <ul>
                            <ProjectListItem>Migration to NuxtJS</ProjectListItem>
                            <ProjectListItem>SEO performance improvements</ProjectListItem>
                            <ProjectListItem>Calender Backend & UI</ProjectListItem>
                        </ul>
                    </div>
                </Content>

                <Content
                    order={2}
                    listItem={listItem}
                    animationDirection={animationDirection}
                >
                    <div>
                        <div className='uppercase'>
                            projects
                        </div>

                        <ul>
                            <ProjectListItem>Telemetry pipeline</ProjectListItem>
                            <ProjectListItem>Infrastructure as code with Terraform </ProjectListItem>
                            <ProjectListItem>Deploy pipeline & deploy tool for devs</ProjectListItem>
                            <ProjectListItem>Moved wordpress/php content app from agency to self-hosted</ProjectListItem>
                        </ul>
                    </div>
                </Content>

                <Content
                    order={3}
                    listItem={listItem}
                    animationDirection={animationDirection}
                >
                    <div>
                        <div className='uppercase'>
                            projects
                        </div>

                        <ul>
                            <ProjectListItem>Soon to be unraveled</ProjectListItem>
                        </ul>
                    </div>
                </Content>

                <Content
                    order={4}
                    listItem={listItem}
                    animationDirection={animationDirection}
                >
                    <div>
                        <div className='uppercase'>
                            projects
                        </div>

                        <ul>
                            <ProjectListItem>You tell me what's next</ProjectListItem>
                        </ul>
                    </div>
                </Content>
            </div>
        </div>
    )
}

export default Career