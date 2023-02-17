import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PokerCard from '@/components/poker-card';

import { PokerSuit as PokerSuitEnum } from '@/types'

export default {
  title: 'UI/PokerCard',
  component: PokerCard,
} as ComponentMeta<typeof PokerCard>;

const Template: ComponentStory<typeof PokerCard> = (args) => <PokerCard {...args}/>;

export const SPADE = Template.bind({});
SPADE.args = {
  card: PokerSuitEnum.SPADE+"a",
  className: 'w-fit h-32'
}

export const HEART = Template.bind({});
HEART.args = {
  card: PokerSuitEnum.HEART+"a",
  className: 'w-fit h-32'
}

export const CLUB = Template.bind({});
CLUB.args = {
  card: PokerSuitEnum.CLUB+"a",
  className: 'w-fit h-32'
}

export const DIAMOND = Template.bind({});
DIAMOND.args = {
  card: PokerSuitEnum.DIAMOND+"a",
  className: 'w-fit h-32'
}