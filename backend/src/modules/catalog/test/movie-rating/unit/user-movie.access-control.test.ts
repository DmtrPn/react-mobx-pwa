import '@core/test/unitTestRanner';
import { EntityName } from '@core/access-control/types';

import { EntityAccessControlTest } from '@core/access-control/test/utils/EntityAccessControlTest';

@Describe()
export class UserMovieAccessControlTest extends EntityAccessControlTest {

    protected entityName = EntityName.UserMovie;

    @Test('Пользователь может создавать свой фильм')
    public checkSimpleUserCanCreateEntity(): void {
        expect(this.canSimpleUserCanCreateEntity()).toBeTruthy();
    }

    @Test('Пользователь может редактировать свой фильм')
    public checkSimpleUserCanEditEntity(): void {
        expect(this.canSimpleUserCanEditEntity()).toBeTruthy();
    }

    @Test('Пользователь может удалять свой фильм')
    public checkSimpleUserCanRemoveEntity(): void {
        expect(this.canSimpleUserCanRemoveEntity()).toBeTruthy();
    }

    @Test('Пользователь может просматривать свой фильм')
    public checkSimpleUserCanViewEntity(): void {
        expect(this.canSimpleUserCanViewEntity()).toBeTruthy();
    }

    @Test('Админ не может создавать свой фильм')
    public checkAdminCanCreateEntity(): void {
        expect(this.canAdminCanCreateEntity()).toBeFalsy();
    }

    @Test('Админ не может редактировать свой фильм')
    public checkAdminCanEditEntity(): void {
        expect(this.canAdminCanEditEntity()).toBeFalsy();
    }

    @Test('Админ не может удалять свой фильм')
    public checkAdminCanRemoveEntity(): void {
        expect(this.canAdminCanRemoveEntity()).toBeFalsy();
    }

    @Test('Админ не может проматривать свой фильм')
    public checkAdminCanViewEntity(): void {
        expect(this.canAdminCanViewEntity()).toBeFalsy();
    }

    @Test('Модератор не может создавать свой фильм')
    public checkEntityModeratorCanCreateEntity(): void {
        expect(this.canEntityModeratorCanCreateEntity()).toBeFalsy();
    }

    @Test('Модератор не может редактировать свой фильм')
    public checkEntityModeratorCanEditEntity(): void {
        expect(this.canEntityModeratorCanEditEntity()).toBeFalsy();
    }

    @Test('Модератор не может удалять свой фильм')
    public checkEntityModeratorCanRemoveEntity(): void {
        expect(this.canEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Модератор не может проматривать свой фильм')
    public checkEntityModeratorCanViewEntity(): void {
        expect(this.canEntityModeratorCanViewEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может создавать свой фильм')
    public checkOtherEntityModeratorCanCreateEntity(): void {
        expect(this.canOtherEntityModeratorCanCreateEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может редактировать свой фильм')
    public checkOtherEntityModeratorCanEditEntity(): void {
        expect(this.canOtherEntityModeratorCanEditEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может удалять свой фильм')
    public checkOtherEntityModeratorCanRemoveEntity(): void {
        expect(this.canOtherEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может проматривать свой фильм')
    public checkOtherEntityModeratorCanViewEntity(): void {
        expect(this.canOtherEntityModeratorCanViewEntity()).toBeFalsy();
    }

}
