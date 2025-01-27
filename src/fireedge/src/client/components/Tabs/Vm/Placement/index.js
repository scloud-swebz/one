/* ------------------------------------------------------------------------- *
 * Copyright 2002-2021, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */
/* eslint-disable jsdoc/require-jsdoc */
import * as React from 'react'
import PropTypes from 'prop-types'

import { TabContext } from 'client/components/Tabs/TabProvider'
import HistoryList from 'client/components/Tabs/Vm/Placement/List'

import * as VirtualMachine from 'client/models/VirtualMachine'
import * as Helper from 'client/models/Helper'

const VmPlacementTab = ({ tabProps = {} }) => {
  const { data: vm } = React.useContext(TabContext)
  const { actions = [] } = tabProps

  const records = VirtualMachine.getHistoryRecords(vm)

  const hypervisor = VirtualMachine.getHypervisor(vm)
  const actionsAvailable = Helper.getActionsAvailable(actions, hypervisor)

  return (
    <HistoryList actions={actionsAvailable} records={records} />
  )
}

VmPlacementTab.propTypes = {
  tabProps: PropTypes.object
}

VmPlacementTab.displayName = 'VmPlacementTab'

export default VmPlacementTab
