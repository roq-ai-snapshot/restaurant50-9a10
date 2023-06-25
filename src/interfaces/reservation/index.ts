import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  table_number: number;
  reservation_time: any;
  status: string;
  created_at?: any;
  updated_at?: any;
  wait_staff_id?: string;

  user_reservation_customer_idTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  user_reservation_wait_staff_idTouser?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  status?: string;
  wait_staff_id?: string;
}
