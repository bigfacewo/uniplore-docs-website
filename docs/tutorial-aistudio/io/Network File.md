---
sidebar_position: 6
---
### 组件介绍
**“加载网络文件”（Network File）**控件用于读取指定格式的图文件。

<hr/>

- 输入：
  - 无
- 输出：
  - data：图文件属性
  - nwdt：网络图实例

<hr/>

**“加载网络文件”（Network File）**控件能够读取的文件类型包括.net，.gml 和 edgelists 等格式。

### 页面介绍
点击**“加载网络文件”（Network File）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/network-file/param.png) ](/img/aistudio/io/network-file/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>图信息</td> 
      <td>
      加载图文件并且根据图构建数据表
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>点数据信息</td> 
      <td>
      图中节点的信息。读取标准数据文件
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>基本信息</td> 
      <td>
      显示图的类型、点的个数、边的个数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载网络文件”（Network File）**组件加载数据，同时连接**“网络查看器”（Network Explorer）**组件查看图信息。  
[ ![](/img/aistudio/io/network-file/workflow.png) ](/img/aistudio/io/network-file/workflow.png)

案例中加载 **airtraffic** 图文件（[airtraffic.net](/sample-file/aistudio/io/network-file/airtraffic.net)，[airtraffic_item.tab](/sample-file/aistudio/io/network-file/airtraffic_items.tab)），其余使用默认配置。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/io/network-file/workflow-result.png) ](/img/aistudio/io/network-file/workflow-result.png)