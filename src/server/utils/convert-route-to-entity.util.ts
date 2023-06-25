const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
