import '@core/test/unitTestRanner';
import { EntityName } from '@core/access-control/types';

import { EntityAccessControlTest } from '@core/access-control/test/utils/EntityAccessControlTest';

@Describe()
export class AffirmationAccessControlTest extends EntityAccessControlTest {

    protected entityName = EntityName.Affirmation;

    @Test('Пользователь не может создавать аффирмации')
    public checkSimpleUserCanCreateEntity(): void {
        expect(this.canSimpleUserCanCreateEntity()).toBeFalsy();
    }

    @Test('Пользователь не может редактировать аффирмации')
    public checkSimpleUserCanEditEntity(): void {
        expect(this.canSimpleUserCanEditEntity()).toBeFalsy();
    }

    @Test('Пользователь не может удалять аффирмации')
    public checkSimpleUserCanRemoveEntity(): void {
        expect(this.canSimpleUserCanRemoveEntity()).toBeFalsy();
    }

    @Test('Пользователь может просматривать аффирмации')
    public checkSimpleUserCanViewEntity(): void {
        expect(this.canSimpleUserCanViewEntity()).toBeTruthy();
    }

    @Test('Админ может создавать аффирмации')
    public checkAdminCanCreateEntity(): void {
        expect(this.canAdminCanCreateEntity()).toBeTruthy();
    }

    @Test('Админ может редактировать аффирмации')
    public checkAdminCanEditEntity(): void {
        expect(this.canAdminCanEditEntity()).toBeTruthy();
    }

    @Test('Админ может удалять аффирмации')
    public checkAdminCanRemoveEntity(): void {
        expect(this.canAdminCanRemoveEntity()).toBeTruthy();
    }

    @Test('Админ может проматривать аффирмации')
    public checkAdminCanViewEntity(): void {
        expect(this.canAdminCanViewEntity()).toBeTruthy();
    }

    @Test('Модератор может создавать аффирмации')
    public checkEntityModeratorCanCreateEntity(): void {
        expect(this.canEntityModeratorCanCreateEntity()).toBeTruthy();
    }

    @Test('Модератор может редактировать аффирмации')
    public checkEntityModeratorCanEditEntity(): void {
        expect(this.canEntityModeratorCanEditEntity()).toBeTruthy();
    }

    @Test('Модератор не может удалять аффирмации')
    public checkEntityModeratorCanRemoveEntity(): void {
        expect(this.canEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Модератор может проматривать аффирмации')
    public checkEntityModeratorCanViewEntity(): void {
        expect(this.canEntityModeratorCanViewEntity()).toBeTruthy();
    }

    @Test('Другой модератор не может создавать аффирмации')
    public checkOtherEntityModeratorCanCreateEntity(): void {
        expect(this.canOtherEntityModeratorCanCreateEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может редактировать аффирмации')
    public checkOtherEntityModeratorCanEditEntity(): void {
        expect(this.canOtherEntityModeratorCanEditEntity()).toBeFalsy();
    }

    @Test('Другой модератор не может удалять аффирмации')
    public checkOtherEntityModeratorCanRemoveEntity(): void {
        expect(this.canOtherEntityModeratorCanRemoveEntity()).toBeFalsy();
    }

    @Test('Другой модератор может проматривать аффирмации')
    public checkOtherEntityModeratorCanViewEntity(): void {
        expect(this.canOtherEntityModeratorCanViewEntity()).toBeFalsy();
    }

}
