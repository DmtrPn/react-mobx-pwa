import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Dream, DreamProps } from './Dream';
import { DreamApi } from '@api';
import { DreamState } from '@store/Dream';

interface Props extends DreamProps, StoreProps {
}

interface StoreProps {
    dreamState: DreamState;
}

@inject(DreamState.Name)
@observer
export class DreamContainer extends React.Component<Props> {

    public async componentDidMount() {
        const { dreamState } = this.props;

        const dreams = await DreamApi.getDreamList();

        dreamState.setDreams(dreams);
    }

    public render() {
        const { dreamState } = this.props;

        return (
            <Dream
                dreams={dreamState.dreams}
            />
        );
    }
}
