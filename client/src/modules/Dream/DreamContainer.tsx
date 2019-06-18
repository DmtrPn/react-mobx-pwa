import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Dream, DreamProps } from './Dream';
import { DreamApi } from '@api';
import { DreamState } from '@store/Dream';

interface Props extends DreamProps, StoreProps {
}

interface StoreProps {
    dream: DreamState;
}

@inject(DreamState.Name)
@observer
export class DreamContainer extends React.Component<Props> {

    public async componentDidMount() {
        const { dream } = this.props;

        const dreams = await DreamApi.getDreamList();

        dream.setDreams(dreams);
    }

    public render() {
        const { dream } = this.props;

        return (
            <Dream
                dreams={dream.dreams}
            />
        );
    }
}
