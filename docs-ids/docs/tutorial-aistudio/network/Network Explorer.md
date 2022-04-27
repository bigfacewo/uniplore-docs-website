### 组件介绍
**“网络查看器”（Network Explorer）**控件获取图信息并可视化的进行展示，并为用户提供简单的图分析功能。

<hr/>

- 输入：
  - nwdt：网络图实例
- 输出：
  - nwdt：网络图实例

<hr/>


### 页面介绍
点击**“网络查看器”（Network Explorer）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/network/network-explorer/param.png) ](/img/aistudio/network/network-explorer/param.png)

点击“查看数据”按钮，查看网络信息：
[ ![](/img/aistudio/network/network-explorer/interaction.png) ](/img/aistudio/network/network-explorer/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>基本信息</td> 
      <td>
      显示网络的节点和边的个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>颜色</td> 
      <td>
      网络图中节点显示的颜色
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>形状</td> 
      <td>
      网络图中节点形状
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>大小</td> 
      <td>
      选择属性，节点将根据属性值设置节点大小
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>标记</td> 
      <td>
      选择属性，节点将显示对应属性值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>布局</td> 
      <td>
      网络图显示的样式，包括随机、网格、环形、同心环、广度优先、cose等布局
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>节点大小</td> 
      <td>
      调整网络图中节点显示的大小
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>边的宽度</td> 
      <td>
      调整网络图中边显示的宽度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>算法</td> 
      <td>
      选中网络图中的点进行相关的计算，包括邻节点、广度优先搜索、深度优先搜索、PageRank 等。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“网络生成器”（Network Generator）**控件生成网络图，之后连接**“网络查看器”（Network Explorer）**控件查看图信息并进行展示。  
[ ![](/img/aistudio/network/network-explorer/workflow.png) ](/img/aistudio/network/network-explorer/workflow.png)

案例中全部组件使用默认配置。案例中组件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/network/network-explorer/workflow-result.png ](/img/aistudio/network/network-explorer/workflow-result.png)