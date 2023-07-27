/**
 * timeslot23-fall controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::timeslot23-fall.timeslot23-fall', ({ strapi }) => ({
  async consume(ctx) {
    try {
      const timeSlot = await await strapi.entityService.findOne('api::timeslot23-fall.timeslot23-fall', ctx.request.params.id)

      if (timeSlot.availableSlots === 0) {
          return ctx.badRequest('no available slot')
      }

      const updatedTimeSlot = await strapi.entityService.update('api::timeslot23-fall.timeslot23-fall', ctx.request.params.id, {
        data: {
          availableSlots: timeSlot.availableSlots - 1,
        },
      })

      const { id, ...attributes } = updatedTimeSlot
      ctx.send({
        data: {
          id,
          attributes: {
            ...attributes,
          },
        },
        meta: {},
      })
    } catch (error) {
      ctx.badRequest(null, error)
    }
  },
}));
