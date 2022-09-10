import '@core/test/unitTestRanner';
import { EntityName } from '@core/access-control/types';

import { EntityAccessControlTest } from '@core/access-control/test/utils/EntityAccessControlTest';

@Describe()
export class MovieAccessControlTest extends EntityAccessControlTest {

    protected entityName = EntityName.Movie;

    @Test('Пользователь не может создавать фильм')
    public checkSimpleUserCanCreateEntity(): void {
        expect(this.canSimpleUserCanCreateEntity()).toBeFalsy();
    }

    @Test('Пользователь не может редактировать фильм')
    public checkSimpleUserCanEditEntity(): void {
        expect(this.canSimpleUserCanEditEntity()).toBeFalsy();
    }

    @Test('Пользователь не может удалять фильм')
    public checkSimpleUserCanRemoveEntity(): void {
        expect(this.canSimpleUserCanRemoveEntity()).toBeFalsy();
    }

    @Test('Пользователь может просматривать фильм')
    public checkSimpleUserCanViewEntity(): void {
        expect(this.canSimpleUserCanViewEntity()).toBeTruthy();
    }

    @Test('Админ может создавать фильм')
    public checkAdminCanCreateEntity(): void {
        expect(this.canAdminCanCreateEntity()).toBeTruthy();
    }

    @Test('Админ может редактировать фильм')
    public checkAdminCanEditEntity(): void {
        expect(this.canAdminCanEditEntity()).toBeTruthy();
    }

    @Test('Админ может удалять фильм')
    public checkAdminCanRemoveEntity(): void {
        expect(this.canAdminCanRemoveEntity()).toBeTruthy();
    }

    @Test('Админ может проматривать фильм')
    public checkAdminCanViewEntity(): void {
        expect(this.canAdminCanViewEntity()).toBeTruthy();
    }

    @Test('Модератор может создавать фильм')
    public checkEntityModeratorCanCreateEntity(): void {
        expect(this.canEntityModeratorCanCreateEntity()).toBeTruthy();
    }

    @Test('Модератор может редактировать фильм')
    public checkEntityModeratorCanEditEntity(): void {
        expect(this.canEntityModeratorCanEditEntity()).toBeTruthy();
    }

    @Test('Модератор не может удалять фильм')
    public checkEntityModeratorCanRemoveEntity(): void {
        expect(this.canEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Модератор может проматривать фильм')
    public checkEntityModeratorCanViewEntity(): void {
        expect(this.canEntityModeratorCanViewEntity()).toBeTruthy();
    }

    @Test('Другой модератор не может создавать фильм')
    public checkOtherEntityModeratorCanCreateEntity(): void {
        expect(this.canOtherEntityModeratorCanCreateEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может редактировать фильм')
    public checkOtherEntityModeratorCanEditEntity(): void {
        expect(this.canOtherEntityModeratorCanEditEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может удалять фильм')
    public checkOtherEntityModeratorCanRemoveEntity(): void {
        expect(this.canOtherEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Другой модератор может проматривать фильм')
    public checkOtherEntityModeratorCanViewEntity(): void {
        expect(this.canOtherEntityModeratorCanViewEntity()).toBeFalsy();
    }

}
