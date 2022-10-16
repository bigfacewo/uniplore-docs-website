---
sidebar_position: 7
---
### 组件介绍
**“网络生成器”（Network Generator）**组件能够根据用户设置，构建相应的示例网络图。

<hr/>

- 输入：
  - 无
- 输出：
  - nwdt：网络图实例

<hr/>

### 页面介绍
点击**“网络生成器”（Network Generator）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/network-generator/param.png) ](/img/aistudio/io/network-generator/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>网络类型</td> 
      <td>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>节点数目</td> 
      <td>
      生成网络图的大致节点数（部分网络图不能完全满足节点数的设置）。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“网络生成器”（Network Generator）**组件生成网络图，之后连接**“网络查看器”（Network Explorer）**组件查看图信息并进行展示。  
[ ![](/img/aistudio/io/network-generator/workflow.png) ](/img/aistudio/io/network-generator/workflow.png)

案例中全部组件使用默认配置。案例中组件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/io/network-generator/workflow-result.png) ](/img/aistudio/io/network-generator/workflow-result.png)