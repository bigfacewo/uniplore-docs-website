### 组件介绍
**“保存数据”（Save Data）**控件将处理后的数据集保存为文件。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“保存数据”（Save Data）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/save-data/param.png) ](/img/aistudio/io/save-data/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>文件名</td> 
      <td>
      需要保存的文件名称
      </td> 
      <td>mydata</td>
  </tr>
  <tr>
      <td>保存类型</td>    
      <td>
      可以选择三种类型：.csv/.tab/.pickle
      </td> 
      <td>.csv</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（save-data）**控件加载样例数据集，接着连接**“保存数据”（Save Data）**控件将样例数据集保存为文件。  
[ ![](/img/aistudio/io/save-data/workflow.png) ](/img/aistudio/io/save-data/workflow.png)
