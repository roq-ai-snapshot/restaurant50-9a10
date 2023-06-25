import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  manager_id?: string;
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  user_restaurant_user_idTouser?: UserInterface;
  user_restaurant_manager_idTouser?: UserInterface;
  _count?: {
    menu_item?: number;
    order?: number;
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  manager_id?: string;
}
